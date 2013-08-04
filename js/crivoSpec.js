describe("Crivo", function() {
  var crivo;

  beforeEach(function() {
  });

  it("should iterate until finish with prime numbers: 2, 3, 5, 7, 11, 13, 17, 19, 23 e 29.", function() {
    crivo = new Crivo(30);
    crivo.gerarPrimosErastotenes();
    expect(crivo.primosErastotenes).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
  });

});