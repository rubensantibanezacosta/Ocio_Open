const db = require("../models");
const Comments = db.comments;
const Users = db.users;

class CommentsService {

    async createComment(comment) {
        return Comments.create(comment);
    };

    async findCommentsByEvent(event_id) {
        return Comments.findAll({
            where: {
                event_id: event_id,

            },
            include: {
                model: Users,
                attributes: ['name', 'surname']
            },
            order: [['date', 'DESC']]
        })
    };

    async findCommentsById(id) {
        return Comments.findByPk(id, {
            include: {
                model: Users,
                attributes: ['name', 'surname']
            },
        })
    };

    async deleteComment(comment_id) {
        return Comments.destroy({
            where: { comment_id: comment_id }
        });
    };

}
module.exports = CommentsService;