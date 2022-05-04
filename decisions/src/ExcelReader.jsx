
import * as XLSX from "xlsx";

const ExcelReader = () => {
    const onFileChange = (e) => {
        const [file] = e.target.files

        const reader = new FileReader()

        reader.onload = (evt) => {
            console.log(evt)
            const bstr = evt.target.result;
            const wb = XLSX.read(bstr, {type: "binary"});
            const wsname = wb.SheetNames[0];
            const ws = wb.Sheets[wsname];
            console.log('excel ws', ws)
            const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
            console.log('sheet data: ', data);
        }

        reader.readAsBinaryString(file)
    }

    return (<input type="file" onChange={onFileChange} />)
}

export default ExcelReader;