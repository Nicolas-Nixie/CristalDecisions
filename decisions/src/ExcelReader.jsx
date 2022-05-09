
import React from "react";
import * as XLSX from "xlsx";

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
            console.log("tableau €HT :", montantHT)           
            console.log("tableau €TTC :", montantTTC)

        }
        
        // faire un nouveau tableau (ex pour conso): 
        // additionner value pour les date comprise entre 1 janvier et 31 decembre 2021 23h59 => dayJS pour les date ou moment
        // faire une fonction pour mettre a jour le tableau
        // pour mettre a jour le graph qui utilise un des tableau au dessus et return ce que j'ai besoin


        //Mettre a jour le composant avec les parametres passés
    

        reader.readAsBinaryString(file)
    }

    return (<input type="file" onChange={onFileChange} />)
}

export default ExcelReader;