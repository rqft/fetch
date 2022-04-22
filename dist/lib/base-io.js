"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseIO = void 0;
const pariah_1 = require("../pariah");
var BaseIO;
(function (BaseIO) {
    let ImageFormat;
    (function (ImageFormat) {
        ImageFormat["PNG"] = "png";
        ImageFormat["JPG"] = "jpg";
    })(ImageFormat = BaseIO.ImageFormat || (BaseIO.ImageFormat = {}));
    BaseIO.URL = "https://api.base-api.io/v1/";
    class API extends pariah_1.Pariah {
        token;
        constructor(token) {
            super(BaseIO.URL, {
                headers: { Authorization: `Bearer ${token}` },
            });
            this.token = token;
        }
        async createUser(email, password, confirmation, custom_data) {
            return this.post.json("/users", {
                email,
                password,
                confirmation,
                custom_data,
            });
        }
        async updateUser(id, email, custom_data) {
            return this.post.json(`/users/:id`, {
                ":id": id,
                email,
                custom_data,
            });
        }
        async getUser(id) {
            return this.get.json(`/users/:id`, {
                ":id": id,
            });
        }
        async deleteUser(id) {
            return this.delete.json(`/users/:id`, {
                ":id": id,
            });
        }
        async listUsers(page, perPage) {
            return this.get.json(`/users`, {
                page,
                per_page: perPage,
            });
        }
        async requestPassword(email) {
            return this.post.json(`/password`, {
                email,
            });
        }
        async resetPassword(token, password, confirmation) {
            return this.put.json(`/password`, {
                token,
                password,
                confirmation,
            });
        }
        async sendEmail(from, to, subject, html, text, file) {
            return this.post.json(`/emails`, {
                from,
                to,
                subject,
                html,
                text,
                file,
            });
        }
        async listSentEmails(page, perPage) {
            return this.get.json(`/emails`, {
                page,
                per_page: perPage,
            });
        }
        async session(email, password) {
            return this.post.json(`/sessions`, {
                email,
                password,
            });
        }
        async uploadFile(file) {
            return this.post.json(`/files`, {
                file,
            });
        }
        async downloadFile(id) {
            return this.get.json(`/files/:id/download`, {
                ":id": id,
            });
        }
        async fileDetails(id) {
            return this.get.json(`/files/:id`, {
                ":id": id,
            });
        }
        async deleteFile(id) {
            return this.delete.json(`/files/:id`, {
                ":id": id,
            });
        }
        async listFiles(page, perPage) {
            return this.get.json(`/files`, {
                page,
                per_page: perPage,
            });
        }
        async uploadImage(image) {
            return this.post.json(`/images`, {
                image,
            });
        }
        getImage(id, crop, resize, quality, format) {
            return this.get.json(`/images/:id/image`, {
                ":id": id,
                crop,
                resize,
                quality,
                format,
            });
        }
        async imageDetails(id) {
            return this.get.json(`/images/:id`, {
                ":id": id,
            });
        }
        async deleteImage(id) {
            return this.delete.json(`/images/:id`, {
                ":id": id,
            });
        }
        async listImages(page, perPage) {
            return this.get.json(`/images`, {
                page,
                per_page: perPage,
            });
        }
        async createForm(name) {
            return this.post.json(`/forms`, {
                name,
            });
        }
        async createFormSubmission(id, file, key) {
            return this.post.json(`/forms/:id/submit`, {
                ":id": id,
                file,
                ...key,
            });
        }
        async formDetails(id) {
            return this.get.json(`/forms/:id`, {
                ":id": id,
            });
        }
        async deleteForm(id) {
            return this.delete.json(`/forms/:id`, {
                ":id": id,
            });
        }
        async listForms(page, perPage) {
            return this.get.json(`/forms`, {
                page,
                per_page: perPage,
            });
        }
        async formSubmissionDetails(formId, submissionId) {
            return this.get.json(`/forms/:id/submissions/:submissionId`, {
                ":id": formId,
                ":submissionId": submissionId,
            });
        }
        async updateFormSubmission(formId, submissionId, file, key) {
            return this.put.json(`/forms/:id/submissions/:submissionId`, {
                ":id": formId,
                ":submissionId": submissionId,
                file,
                ...key,
            });
        }
        async deleteFormSubmission(formId, submissionId) {
            return this.delete.json(`/forms/:id/submissions/:submissionId`, {
                ":id": formId,
                ":submissionId": submissionId,
            });
        }
        async listFormSubmissions(formId, page, perPage) {
            return this.get.json(`/forms/:id/submissions`, {
                ":id": formId,
                page,
                per_page: perPage,
            });
        }
        async mailingListDetails(id) {
            return this.get.json(`/mailing_lists/:id`, {
                ":id": id,
            });
        }
        async listMailingLists(page, perPage) {
            return this.get.json(`/mailing_lists`, {
                page,
                per_page: perPage,
            });
        }
        async subscribeToMailingList(id, email) {
            return this.post.json(`/mailing_lists/:id/subscribe`, {
                ":id": id,
                email,
            });
        }
        async unsubscribeFromMailingList(id, email) {
            return this.post.json(`/mailing_lists/:id/unsubscribe`, {
                ":id": id,
                email,
            });
        }
        async sendEmailToMailingList(id, from, subject, html, text) {
            return this.post.json(`/mailing_lists/:id`, {
                ":id": id,
                from,
                subject,
                html,
                text,
            });
        }
    }
    BaseIO.API = API;
})(BaseIO = exports.BaseIO || (exports.BaseIO = {}));
