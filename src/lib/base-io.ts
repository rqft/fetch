import { Pariah } from "../pariah";

export module BaseIO {
    export interface User<Custom> {
        id: string;
        email: string;
        custom_data: Custom;
    }
    export interface List<Item> {
        items: Array<Item>;
        metadata: ListMetadata;
    }
    export interface ListMetadata {
        count: number;
    }
    export interface RequestedPassword {
        forgot_password_token: string;
    }
    export interface Email {
        created_at: string;
        from_address: string;
        to_address: string;
        subject: string;
        html: string;
        text: string;
        id: number;
    }
    export interface File {
        created_at: string;
        id: string;
        name: string;
        size: number;
        extension: string;
    }
    export interface Image {
        created_at: string;
        id: string;
        name: string;
        height: number;
        width: number;
        size: number;
    }
    export enum ImageFormat {
        PNG = "png",
        JPG = "jpg",
    }
    export interface Form {
        created_at: string;
        id: string;
        name: string;
    }
    export interface Submission {
        created_at: string;
        id: string;
        fields: Record<string, string>;
        files: Array<string>;
    }
    export class API extends Pariah {
        public token: string;
        constructor(token: string) {
            super("https://api.base-api.io/v1/", {
                headers: { Authorization: `Bearer ${token}` },
            });
            this.token = token;
        }
        public async createUser<Custom>(
            email: string,
            password: string,
            confirmation: string,
            custom_data: Custom
        ): Promise<User<Custom>> {
            return this.post.json<User<Custom>>("/users", {
                email,
                password,
                confirmation,
                custom_data,
            });
        }

        public async updateUser<Custom>(
            id: string,
            email?: string,
            custom_data?: Custom
        ): Promise<User<Custom>> {
            return this.post.json<User<Custom>>(`/users/:id`, {
                ":id": id,
                email,
                custom_data,
            });
        }

        public async getUser<Custom>(id: string): Promise<User<Custom>> {
            return this.get.json<User<Custom>>(`/users/:id`, {
                ":id": id,
            });
        }

        public async deleteUser(id: string): Promise<User<never>> {
            return this.delete.json<User<never>>(`/users/:id`, {
                ":id": id,
            });
        }

        public async listUsers(
            page?: number,
            perPage?: number
        ): Promise<List<User<never>>> {
            return this.get.json<List<User<never>>>(`/users`, {
                page,
                per_page: perPage,
            });
        }

        public async requestPassword(
            email: string
        ): Promise<RequestedPassword> {
            return this.post.json<RequestedPassword>(`/password`, {
                email,
            });
        }

        public async resetPassword(
            token: string,
            password: string,
            confirmation: string
        ): Promise<User<never>> {
            return this.put.json<User<never>>(`/password`, {
                token,
                password,
                confirmation,
            });
        }

        public async sendEmail(
            from: string,
            to: string,
            subject: string,
            html?: string,
            text?: string,
            file?: string
        ) {
            return this.post.json<Email>(`/emails`, {
                from,
                to,
                subject,
                html,
                text,
                file,
            });
        }

        public async listSentEmails(page: number, perPage: number) {
            return this.get.json<List<Email>>(`/emails`, {
                page,
                per_page: perPage,
            });
        }

        public async session(
            email: string,
            password: string
        ): Promise<User<never>> {
            return this.post.json<User<never>>(`/sessions`, {
                email,
                password,
            });
        }

        public async uploadFile(file: string): Promise<File> {
            return this.post.json<File>(`/files`, {
                file,
            });
        }

        public async downloadFile(id: string): Promise<File> {
            return this.get.json<File>(`/files/:id/download`, {
                ":id": id,
            });
        }

        public async fileDetails(id: string): Promise<File> {
            return this.get.json<File>(`/files/:id`, {
                ":id": id,
            });
        }

        public async deleteFile(id: string): Promise<File> {
            return this.delete.json<File>(`/files/:id`, {
                ":id": id,
            });
        }

        public async listFiles(page: number, perPage: number) {
            return this.get.json<List<File>>(`/files`, {
                page,
                per_page: perPage,
            });
        }

        public async uploadImage(image: string): Promise<Image> {
            return this.post.json<Image>(`/images`, {
                image,
            });
        }

        public getImage(
            id: string,
            crop?: string,
            resize?: string,
            quality?: number,
            format?: ImageFormat
        ) {
            return this.get.json<Image>(`/images/:id/image`, {
                ":id": id,
                crop,
                resize,
                quality,
                format,
            });
        }

        public async imageDetails(id: string): Promise<Image> {
            return this.get.json<Image>(`/images/:id`, {
                ":id": id,
            });
        }

        public async deleteImage(id: string): Promise<Image> {
            return this.delete.json<Image>(`/images/:id`, {
                ":id": id,
            });
        }

        public async listImages(
            page: number,
            perPage: number
        ): Promise<List<Image>> {
            return this.get.json<List<Image>>(`/images`, {
                page,
                per_page: perPage,
            });
        }

        public async createForm(name: string): Promise<Form> {
            return this.post.json<Form>(`/forms`, {
                name,
            });
        }

        public async submitForm(
            id: string,
            file: string,
            key: Record<string, string>
        ): Promise<Submission> {
            return this.post.json<Submission>(`/forms/:id/submit`, {
                ":id": id,
                file,
                ...key,
            });
        }

        public async formDetails(id: string): Promise<Form> {
            return this.get.json<Form>(`/forms/:id`, {
                ":id": id,
            });
        }

        public async deleteForm(id: string): Promise<Form> {
            return this.delete.json<Form>(`/forms/:id`, {
                ":id": id,
            });
        }

        public async listForms(page: number, perPage: number) {
            return this.get.json<List<Form>>(`/forms`, {
                page,
                per_page: perPage,
            });
        }

        public async submissionDetails(
            formId: string,
            submissionId: string
        ): Promise<Submission> {
            return this.get.json<Submission>(
                `/forms/:id/submissions/:submission_id`,
                {
                    ":id": formId,
                    ":submission_id": submissionId,
                }
            );
        }
    }
}
