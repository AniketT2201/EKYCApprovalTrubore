import "@pnp/sp/lists";
import "@pnp/sp/items";
// import { IPatelEngProps } from "../../components/IPatelEngProps";
import { IEkycApprovalTruboreProps } from "../../../components/IEkycApprovalTruboreProps";
import SPCRUDOPS from "../../DAL/spcrudops";

export interface ISPCRUD {
    getData(listName: string, columnsToRetrieve: string, columnsToExpand: string, filters: string, orderby: { column: string, isAscending: boolean }, top: number, props: IEkycApprovalTruboreProps): Promise<any>;
    getRootData(listName: string, columnsToRetrieve: string, columnsToExpand: string, filters: string, orderby: { column: string, isAscending: boolean }, top: number, props: IEkycApprovalTruboreProps): Promise<any>;
    insertData(listName: string, data: any, props: IEkycApprovalTruboreProps): Promise<any>;
    updateData(listName: string, itemId: number, data: any, props: IEkycApprovalTruboreProps): Promise<any>;
    deleteData(listName: string, itemId: number, props: IEkycApprovalTruboreProps): Promise<any>;
    getListInfo(listName: string, props: IEkycApprovalTruboreProps): Promise<any>;
    getListData(listName: string, columnsToRetrieve: string, props: IEkycApprovalTruboreProps): Promise<any>;
    batchInsert(listName: string, data: any, props: IEkycApprovalTruboreProps): Promise<any>;
    batchUpdate(listName: string, data: any, props: IEkycApprovalTruboreProps): Promise<any>;
    batchDelete(listName: string, data: any, props: IEkycApprovalTruboreProps): Promise<any>;
    createFolder(listName: string, folderName: string, props: IEkycApprovalTruboreProps): Promise<any>;
    uploadFile(folderServerRelativeUrl: string, file: File, props: IEkycApprovalTruboreProps): Promise<any>;
    deleteFile(fileServerRelativeUrl: string, props: IEkycApprovalTruboreProps): Promise<any>;
    currentProfile(props: IEkycApprovalTruboreProps): Promise<any>;
    getLoggedInSiteGroups(props: IEkycApprovalTruboreProps): Promise<any>;
    getAllSiteGroups(props: IEkycApprovalTruboreProps): Promise<any>;
    getTopData(listName: string, columnsToRetrieve: string, columnsToExpand: string, filters: string
        , orderby: { column: string, isAscending: boolean }, top: number, props: IEkycApprovalTruboreProps): Promise<any>;
    addAttchmentInList(attFiles: File, listName: string, itemId: number, fileName: string, props: IEkycApprovalTruboreProps): Promise<any>;

}

export default async function USESPCRUD(): Promise<ISPCRUD> {
    const spCrudOps = await SPCRUDOPS();
    return {
        getData: async (listName: string, columnsToRetrieve: string, columnsToExpand: string, filters: string
            , orderby: { column: string, isAscending: boolean }, top: number, props: IEkycApprovalTruboreProps) => {
            return await spCrudOps.getData(listName, columnsToRetrieve, columnsToExpand, filters, orderby, props);
        },
        getRootData: async (listName: string, columnsToRetrieve: string, columnsToExpand: string, filters: string
            , orderby: { column: string, isAscending: boolean }, top: number, props: IEkycApprovalTruboreProps) => {
            return await spCrudOps.getData(listName, columnsToRetrieve, columnsToExpand, filters, orderby, props);
        },
        insertData: async (listName: string, data: any, props: IEkycApprovalTruboreProps) => {
            return await spCrudOps.insertData(listName, data, props);
        },
        updateData: async (listName: string, itemId: number, data: any, props: IEkycApprovalTruboreProps) => {
            return await spCrudOps.updateData(listName, itemId, data, props);
        },
        deleteData: async (listName: string, itemId: number, props: IEkycApprovalTruboreProps) => {
            return await spCrudOps.deleteData(listName, itemId, props);
        },
        getListInfo: async (listName: string, props: IEkycApprovalTruboreProps) => {
            return await spCrudOps.getListInfo(listName, props);
        },
        getListData: async (listName: string, columnsToRetrieve: string, props: IEkycApprovalTruboreProps) => {
            return await spCrudOps.getListData(listName, columnsToRetrieve, props);
        },
        batchInsert: async (listName: string, data: any, props: IEkycApprovalTruboreProps) => {
            return await spCrudOps.batchInsert(listName, data, props);
        },
        batchUpdate: async (listName: string, data: any, props: IEkycApprovalTruboreProps) => {
            return await spCrudOps.batchUpdate(listName, data, props);
        },
        batchDelete: async (listName: string, data: any, props: IEkycApprovalTruboreProps) => {
            return await spCrudOps.batchDelete(listName, data, props);
        },
        createFolder: async (listName: string, folderName: string, props: IEkycApprovalTruboreProps) => {
            return await spCrudOps.createFolder(listName, folderName, props);
        },
        uploadFile: async (folderServerRelativeUrl: string, file: File, props: IEkycApprovalTruboreProps) => {
            return await spCrudOps.uploadFile(folderServerRelativeUrl, file, props);
        },
        deleteFile: async (fileServerRelativeUrl: string, props: IEkycApprovalTruboreProps) => {
            return await spCrudOps.deleteFile(fileServerRelativeUrl, props);
        },
        currentProfile: async (props: IEkycApprovalTruboreProps) => {
            return await spCrudOps.currentProfile(props);
        },

        getLoggedInSiteGroups: async (props: IEkycApprovalTruboreProps) => {
            return await spCrudOps.getLoggedInSiteGroups(props);
        },
        getAllSiteGroups: async (props: IEkycApprovalTruboreProps) => {
            return await spCrudOps.getAllSiteGroups(props);
        },
        getTopData: async (listName: string, columnsToRetrieve: string, columnsToExpand: string, filters: string
            , orderby: { column: string, isAscending: boolean }, top: number, props: IEkycApprovalTruboreProps) => {
            return await spCrudOps.getTopData(listName, columnsToRetrieve, columnsToExpand, filters, orderby, top, props);
        },
        addAttchmentInList: async (attFiles: File, listName: string, itemId: number, fileName: string, props: IEkycApprovalTruboreProps) => {
            return await spCrudOps.addAttchmentInList(attFiles, listName, itemId, fileName, props);
        }
    };
}