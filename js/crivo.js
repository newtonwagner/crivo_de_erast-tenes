function Crivo(limite) {
	this.limite = limite;
}

Crivo.prototype.limite = "";
Crivo.prototype.primosErastotenes = [];

Crivo.prototype.gerarLista = function() {
	for (i = 1; i <= this.limite; i++) {
		this.primosErastotenes.push(i);
	}
};

Crivo.prototype.eliminarMultiplos = function(n) {
	for (var x = 1; x <= this.primosErastotenes.length; x++) {
		if (this.primosErastotenes[x] % n == 0 && this.primosErastotenes[x] != n) {
			this.primosErastotenes.splice(this.primosErastotenes.lastIndexOf(this.primosErastotenes[x]), 1);
			x--;
		}
	}
};

Crivo.prototype.gerarPrimosErastotenes = function() {
	this.gerarLista(); // gera a lista com os numeros passados
	this.primosErastotenes.shift(); // elimina o numero 1

	var nrFinal = Math.floor(Math.sqrt(this.limite)); // define o nr final

	// navega ate o numero final
	for (var i = 2; i <= nrFinal; i++) {
		if (this.primosErastotenes.lastIndexOf(i) >= 0) {
			this.eliminarMultiplos(i);
		}
	}
};

