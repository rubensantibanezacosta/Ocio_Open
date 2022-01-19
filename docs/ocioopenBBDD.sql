-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 08-12-2021 a las 23:51:03
-- Versión del servidor: 8.0.27-0ubuntu0.20.04.1
-- Versión de PHP: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--



CREATE TABLE `assistants` (
  `event_id` float NOT NULL,
  `assistant` varchar(200) NOT NULL,
  `attendance` tinyint NOT NULL,
  `excuse` varchar(2000) DEFAULT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
)  ;

--
-- Volcado de datos para la tabla `assistants`
--


-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comments`
--

CREATE TABLE `comments` (
  `comment_id` float NOT NULL,
  `event_id` float NOT NULL,
  `assistant` varchar(200) NOT NULL,
  `comment` varchar(2000) NOT NULL,
  `date` datetime NOT NULL
)  ;

--
-- Volcado de datos para la tabla `comments`
--

------------------------------------------------

--
-- Estructura de tabla para la tabla `events`
--

CREATE TABLE `events` (
  `event_id` float NOT NULL,
  `tittle` varchar(200) NOT NULL,
  `date` datetime NOT NULL,
  `zone` varchar(500) NOT NULL,
  `place` varchar(500) NOT NULL,
  `description` varchar(4000) DEFAULT NULL,
  `punctuation_avg` float NOT NULL,
  `organizer` varchar(200) NOT NULL,
  `image_id` int DEFAULT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
)  ;

--
-- Volcado de datos para la tabla `events`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `images`
--

CREATE TABLE `images` (
  `id` int NOT NULL,
  `url` varchar(2000) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
)  ;

--
-- Volcado de datos para la tabla `images`
--
-------------------------------------------------------

--
-- Estructura de tabla para la tabla `punctuations`
--

CREATE TABLE `punctuations` (
  `event_id` float NOT NULL,
  `assistant` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `punctuation` float NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
)  ;

--
-- Volcado de datos para la tabla `punctuations`
--


-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `number` int NOT NULL,
  `role_key` varchar(500) NOT NULL,
  `permissions` varchar(2000) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
)  ;

--

-

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `email` varchar(200) NOT NULL,
  `name` varchar(200) NOT NULL,
  `surname` varchar(400) NOT NULL,
  `image_url` varchar(2000) NOT NULL,
  `role` varchar(50) NOT NULL,
  `punctuation_avg` float NOT NULL,
  `createdAt` date NOT NULL,
  `lastconnection` datetime DEFAULT NULL,
  `updatedAt` date NOT NULL
)  ;

--
-- Volcado de datos para la tabla `users`
--

--
-- Estructura de tabla para la tabla `zones`
--

CREATE TABLE `zones` (
  `id` varchar(7) NOT NULL,
  `name` varchar(50) NOT NULL,
  `punctuationavg` float DEFAULT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
)  ;

--
-- Volcado de datos para la tabla `zones`
--

-- Índices para tablas volcadas
--

--
-- Indices de la tabla `assistants`
--
ALTER TABLE `assistants`
  ADD PRIMARY KEY (`event_id`,`assistant`),
  ADD KEY `FK_user_assistant` (`assistant`);

--
-- Indices de la tabla `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`comment_id`),
  ADD KEY `U_user_comment` (`assistant`) USING BTREE,
  ADD KEY `U_event_comment` (`event_id`) USING BTREE;

--
-- Indices de la tabla `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`event_id`),
  ADD KEY `FK_users_events` (`organizer`),
  ADD KEY `FK_events_img` (`image_id`);

--
-- Indices de la tabla `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `punctuations`
--
ALTER TABLE `punctuations`
  ADD PRIMARY KEY (`event_id`,`assistant`) USING BTREE,
  ADD KEY `FK_userasisstant_punctuation` (`assistant`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`number`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`email`);

--
-- Indices de la tabla `zones`
--
ALTER TABLE `zones`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comments`
--
ALTER TABLE `comments`
  MODIFY `comment_id` float NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT de la tabla `events`
--
ALTER TABLE `events`
  MODIFY `event_id` float NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT de la tabla `images`
--
ALTER TABLE `images`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `assistants`
--
ALTER TABLE `assistants`
  ADD CONSTRAINT `FK_assistant_event` FOREIGN KEY (`event_id`) REFERENCES `events` (`event_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_user_assistant` FOREIGN KEY (`assistant`) REFERENCES `users` (`email`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `FK_assistant_comment` FOREIGN KEY (`assistant`) REFERENCES `users` (`email`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_comments_events` FOREIGN KEY (`event_id`) REFERENCES `events` (`event_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `events`
--
ALTER TABLE `events`
  ADD CONSTRAINT `FK_events_img` FOREIGN KEY (`image_id`) REFERENCES `images` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_users_events` FOREIGN KEY (`organizer`) REFERENCES `users` (`email`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `punctuations`
--
ALTER TABLE `punctuations`
  ADD CONSTRAINT `FK_punctuations_events` FOREIGN KEY (`event_id`) REFERENCES `events` (`event_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_userasisstant_punctuation` FOREIGN KEY (`assistant`) REFERENCES `users` (`email`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;