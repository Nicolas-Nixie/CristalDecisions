
import React from "react";
import * as XLSX from "xlsx";
import * as dayjs from "dayjs";

let consoParAn = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

const ExcelReader = () => {

    const onFileChange = (e) => {
        const [file] = e.target.files

        const reader = new FileReader()

        reader.onload = (evt) => {
            const bstr = evt.target.result;
            const wb = XLSX.read(bstr, {type: "binary", cellDates: true });
            const wsname = wb.SheetNames[0];
            const ws = wb.Sheets[wsname];
            const data = XLSX.utils.sheet_to_json(ws, { header: 1 }, );
            const dataLenght = data.length;
            console.log('sheet data: ', data);
            
            let conso = [];
            let montantHT = [];
            let montantTTC = [];
            for (let i = 1; i < dataLenght; i++) {
                const test = {
                    value: data[i][23],
                    date: data[i][17]
                }
                const test1 = {
                    value: data[i][41],
                    date: data[i][17]
                }
                const test2 = {
                    value: data[i][42],
                    date: data[i][17]
                }
                conso.push(test)
                montantHT.push(test1)
                montantTTC.push(test2)
        
            }
            console.log("tableau conso :", conso)

            
            //let montantHTParAn = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            //let montantTTCParAn = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

           console.log((dayjs(conso[1].date).format('YYYY')))

           for (let i = 0 ; i < conso.length; i++) {
                if ((dayjs(conso[i].date).format('YYYY') === '2021')){
                    if (isNaN(conso[i].value)) {
                        conso[i].value = 0
                    }
                    consoParAn[dayjs(conso[i].date).month()] = consoParAn[dayjs(conso[i].date).month()] + conso[i].value
                }
 
            }
            console.log(consoParAn)
            

        }
    

        reader.readAsBinaryString(file)
    }

    return (<input type="file" onChange={onFileChange} />)
}

export default ExcelReader;
export {consoParAn};