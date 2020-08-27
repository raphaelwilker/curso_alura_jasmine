describe("Agendamento", function(){
    var agenda;
    beforeEach(function(){
        agenda = new Agendamento();
        paciente = new PacienteBuilder().constroi()
    });

    it("deve agendar para 20 dias depois", function() {

        var consulta = new Consulta(paciente, [], false, false, new Date(2014, 5, 30));
        var novaConsulta = agenda.para(consulta);

        expect(novaConsulta.getData().toString()).toEqual(new Date(2014,6,21).toString());

    });
});