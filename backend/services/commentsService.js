const db = require("../models");
const Comments = db.comments;

class CommentsService {

    async createComment(comment) {
        return Comments.create(comment);
    };

    async findCommentsByEvent(event_id) {
        return Comments.findAll({
            where: {
                event_id: event_id
            }
        })
    };

    async deleteComment(comment_id) {
        return Comments.destroy({
            where: { comment_id: comment_id }
        });
    };

}
module.exports = CommentsService;