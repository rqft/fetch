import { Data } from "../data";
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
    interface FormSubmission {
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
        createUser<Custom>(email: string, password: string, confirmation: string, custom_data: Custom): Promise<Data<User<Custom>>>;
        updateUser<Custom>(id: string, email?: string, custom_data?: Custom): Promise<Data<User<Custom>>>;
        getUser<Custom>(id: string): Promise<Data<User<Custom>>>;
        deleteUser(id: string): Promise<Data<User<never>>>;
        listUsers(page?: number, perPage?: number): Promise<Data<List<User<never>>>>;
        requestPassword(email: string): Promise<Data<RequestedPassword>>;
        resetPassword(token: string, password: string, confirmation: string): Promise<Data<User<never>>>;
        sendEmail(from: string, to: string, subject: string, html?: string, text?: string, file?: string): Promise<Data<Email>>;
        listSentEmails(page: number, perPage: number): Promise<Data<List<Email>>>;
        session(email: string, password: string): Promise<Data<User<never>>>;
        uploadFile(file: string): Promise<Data<File>>;
        downloadFile(id: string): Promise<Data<File>>;
        fileDetails(id: string): Promise<Data<File>>;
        deleteFile(id: string): Promise<Data<File>>;
        listFiles(page: number, perPage: number): Promise<Data<List<File>>>;
        uploadImage(image: string): Promise<Data<Image>>;
        getImage(id: string, crop?: string, resize?: string, quality?: number, format?: ImageFormat): Promise<Data<Image>>;
        imageDetails(id: string): Promise<Data<Image>>;
        deleteImage(id: string): Promise<Data<Image>>;
        listImages(page: number, perPage: number): Promise<Data<List<Image>>>;
        createForm(name: string): Promise<Data<Form>>;
        createFormSubmission(id: string, file: string, key: Record<string, string>): Promise<Data<FormSubmission>>;
        formDetails(id: string): Promise<Data<Form>>;
        deleteForm(id: string): Promise<Data<Form>>;
        listForms(page: number, perPage: number): Promise<Data<List<Form>>>;
        formSubmissionDetails(formId: string, submissionId: string): Promise<Data<FormSubmission>>;
        updateFormSubmission(formId: string, submissionId: string, file: string, key: Record<string, string>): Promise<Data<FormSubmission>>;
        deleteFormSubmission(formId: string, submissionId: string): Promise<Data<FormSubmission>>;
        listFormSubmissions(formId: string, page?: number, perPage?: number): Promise<Data<List<FormSubmission>>>;
        mailingListDetails(id: string): Promise<Data<MailingList>>;
        listMailingLists(page?: number, perPage?: number): Promise<Data<List<MailingList>>>;
        subscribeToMailingList(id: string, email: string): Promise<Data<MailingList>>;
        unsubscribeFromMailingList(id: string, email: string): Promise<Data<MailingList>>;
        sendEmailToMailingList(id: string, from: string, subject: string, html: string, text: string): Promise<Data<OutgoingMailingListEntry>>;
        retrieveMailingList(id: string): Promise<Data<MailingList>>;
    }
}
