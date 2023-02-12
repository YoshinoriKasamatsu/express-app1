import { Todo } from "../models/todo";
import XLSX from 'XLSX';
import fs from 'fs';

export class ExcelDataStore{

    readonly dataFilepath = "./data/data.xlsx"
    private isReadLock = false;

    public todos: Todo[] = [];

    constructor(){

    }

    loadData(){

        const dataWb = fs.watch(this.dataFilepath, { },async () => {
            this.isReadLock = true;
            if(this.isReadLock){
                return;
            }
            while(true){
                let isSuccess = false;
                try{
                    this.readExcelData();
                    isSuccess = true;
                }catch(e){
    
                }                
                if(isSuccess){
                    this.isReadLock = false;
                    break;
                }
            }
        });
    }

    private readExcelData() {
        const book = XLSX.readFile(this.dataFilepath, {});
        const sheet = book.Sheets['todo'];
        const todos = XLSX.utils.sheet_to_json(sheet);
        console.log(todos);
    }
}