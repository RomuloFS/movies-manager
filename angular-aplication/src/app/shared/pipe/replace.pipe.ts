import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'replace'
})
export class ReplacePipe implements PipeTransform{

    transform(value: string, char: string, valueToReplace: string){
        /* PRIMEIRO PARAMETRO O VALOR A SER PEGADO */
        return value.replace(char, valueToReplace)
    }
}

@Pipe({
    name: 'primeiraMaiuscula'
})
export class primeiraMaiuscula implements PipeTransform{

    transform(value: string){
        return value[0].toUpperCase() + value.substr(1);
    }
}
