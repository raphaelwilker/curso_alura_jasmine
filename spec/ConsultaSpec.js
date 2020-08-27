describe("Consulta",function(){
    var paciente;
    
    beforeEach(function() {
        paciente = new Paciente("Guilherme", 28, 72, 1.80);
    });

    it('não deve cobrar nada se a consulta for um retorno', function(){
        var consulta = new Consulta(paciente,[],true,true,26082020)
        expect(consulta.preco()).toEqual(0);
    });
    it('deve cobrar 25 por cada procedimento comum', function(){
        var consulta = new Consulta(paciente,["proc1", "proc2"], false, false,26082020)
        expect(consulta.preco()).toEqual(50);
    });
    it('deve dobrar o preco da consulta particular',function(){
        var consulta = new Consulta(paciente,["proc1", "proc2"], true, false,26082020)
        expect(consulta.preco()).toEqual(50*2);
    });

    it("deve cobrar preco especifico dependendo do procedimento", function() {
        var consulta = new Consulta(paciente, ["procedimento-comum", "raio-x", "procedimento-comum2", "gesso"], false, false,26082020);
        expect(consulta.preco()).toEqual(25 + 55 + 25 + 32);
    });
});