import { Pariah } from "../pariah";
export declare module BaseIO {
    interface User<Custom> {
        id: string;
        email: string;
        custom_data: Custom;
    }
    interface List<Item> {
        items: Array<Item>;
        metadata: ListMetadata;
    }
    interface ListMetadata {
        count: number;
    }
    interface RequestedPassword {
        forgot_password_token: string;
    }
    interface Email {
        created_at: string;
        from_address: string;
        to_address: string;
        subject: string;
        html: string;
        text: string;
        id: number;
    }
    interface File {
        created_at: string;
        id: string;
        name: string;
        size: number;
        extension: string;
    }
    interface Image {
        created_at: string;
        id: string;
        name: string;
        height: number;
        width: number;
        size: number;
    }
    enum ImageFormat {
        PNG = "png",
        JPG = "jpg"
    }
    interface Form {
        created_at: string;
        id: string;
        name: string;
    }
    interface Submission {
        created_at: string;
        id: string;
        fields: Record<string, string>;
        files: Array<string>;
    }
    interface MailingList {
        unsubscribe_redirect_url: string;
        created_at: string;
        id: string;
        name: string;
        emails: Array<string>;
    }
    interface OutgoingMailingListEntry {
        failed: Array<string>;
        sent: Array<string>;
    }
    const Url: URL;
    class API extends Pariah {
        token: string;
        constructor(token: string);
        createUser<Custom>(email: string, password: string, confirmation: string, custom_data: Custom): Promise<User<Custom>>;
        updateUser<Custom>(id: string, email?: string, custom_data?: Custom): Promise<User<Custom>>;
        getUser<Custom>(id: string): Promise<User<Custom>>;
        deleteUser(id: string): Promise<User<never>>;
        listUsers(page?: number, perPage?: number): Promise<List<User<never>>>;
        requestPassword(email: string): Promise<RequestedPassword>;
        resetPassword(token: string, password: string, confirmation: string): Promise<User<never>>;
        sendEmail(from: string, to: string, subject: string, html?: string, text?: string, file?: string): Promise<Email>;
        listSentEmails(page: number, perPage: number): Promise<List<Email>>;
        session(email: string, password: string): Promise<User<never>>;
        uploadFile(file: string): Promise<File>;
        downloadFile(id: string): Promise<File>;
        fileDetails(id: string): Promise<File>;
        deleteFile(id: string): Promise<File>;
        listFiles(page: number, perPage: number): Promise<List<File>>;
        uploadImage(image: string): Promise<Image>;
        getImage(id: string, crop?: string, resize?: string, quality?: number, format?: ImageFormat): Promise<Image>;
        imageDetails(id: string): Promise<Image>;
        deleteImage(id: string): Promise<Image>;
        listImages(page: number, perPage: number): Promise<List<Image>>;
        createForm(name: string): Promise<Form>;
        createFormSubmission(id: string, file: string, key: Record<string, string>): Promise<Submission>;
        formDetails(id: string): Promise<Form>;
        deleteForm(id: string): Promise<Form>;
        listForms(page: number, perPage: number): Promise<List<Form>>;
        formSubmissionDetails(formId: string, submissionId: string): Promise<Submission>;
        updateFormSubmission(formId: string, submissionId: string, file: string, key: Record<string, string>): Promise<Submission>;
        deleteFormSubmission(formId: string, submissionId: string): Promise<Submission>;
        listFormSubmissions(formId: string, page?: number, perPage?: number): Promise<List<Submission>>;
        mailingListDetails(id: string): Promise<MailingList>;
        listMailingLists(page?: number, perPage?: number): Promise<List<MailingList>>;
        subscribeToMailingList(id: string, email: string): Promise<MailingList>;
        unsubscribeFromMailingList(id: string, email: string): Promise<MailingList>;
        sendEmailToMailingList(id: string, from: string, subject: string, html: string, text: string): Promise<OutgoingMailingListEntry>;
    }
}
