// 1 - exemplo decorator
function myDecorator(){
    console.log("iniciando decorator!");

    return function(
        target: any, 
        propertKey: string, 
        descriptor: PropertyDescriptor
    ) {
        console.log("executando decorator");
        console.log(target);
        console.log(propertKey);
        console.log(descriptor);
    };
}


class myClass {
    name!: string; 

    @myDecorator
    testing() {
        console.log("terminando execução do metodo")
    }
}

const myObj5 = new myClass();

myObj5.testing();