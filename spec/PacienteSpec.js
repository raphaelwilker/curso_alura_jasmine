describe('Paciente',function(){

    var paciente = new PacienteBuilder().constroi();

    it("deve calcular o IMC", function(){
        expect(paciente.imc()).toEqual(paciente.peso/(Math.pow(paciente.altura,2)));
    });

    it("deve calcular os batimentos", function(){
        expect(paciente.batimentos()).toEqual(1177344000)
    })
})