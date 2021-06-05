// Regra de cramer

class Calculo {
    constructor(vet1, vet2) {

        const vetLimpo = vet1.split(',');
        const vetEqLimpo = vet2.split(',');

        this.a1 = Number(vetLimpo[0]);
        this.a2 = Number(vetLimpo[1]);
        this.a3 = Number(vetLimpo[2]);
        this.a4 = Number(vetLimpo[3]);
        this.a5 = Number(vetLimpo[4]);
        this.a6 = Number(vetLimpo[5]);
        this.a7 = Number(vetLimpo[6]);
        this.a8 = Number(vetLimpo[7]);
        this.a9 = Number(vetLimpo[8]);

        this.a10 = Number(vetEqLimpo[0]);
        this.a11 = Number(vetEqLimpo[1]);
        this.a12 = Number(vetEqLimpo[2]);

        this.chamaEventos();
    }

    chamaEventos() {
        const pDelta = this.primeiroDelta();
        const sDelta = this.segundoDelta();
        const tDelta = this.terceiroDelta();
        const qDelta = this.quartoDelta();
        this.realizaContaDelta(pDelta, sDelta, tDelta, qDelta);
    }

    primeiroDelta() {
        let LP1 = this.a1 * this.a5 * this.a9;
        let LP2 = this.a4 * this.a8 * this.a3;
        let LP3 = this.a7 * this.a2 * this.a6;
        let LPT = LP1 + LP2 + LP3;

        let LS1 = this.a3 * this.a5 * this.a7;
        let LS2 = this.a6 * this.a8 * this.a1;
        let LS3 = this.a9 * this.a2 * this.a4;
        let LST = LS1 + LS2 + LS3;

        return (LPT - LST);
    }

    segundoDelta() {
        let LP1 = this.a10 * this.a5 * this.a9;
        let LP2 = this.a11 * this.a8 * this.a3;
        let LP3 = this.a12 * this.a2 * this.a6;
        let LPT = LP1 + LP2 + LP3;


        let LS1 = this.a3 * this.a5 * this.a12;
        let LS2 = this.a6 * this.a8 * this.a10;
        let LS3 = this.a9 * this.a2 * this.a11;
        let LST = LS1 + LS2 + LS3;

        return (LPT - LST);
    }

    terceiroDelta() {
        let LP1 = this.a1 * this.a11 * this.a9;
        let LP2 = this.a4 * this.a12 * this.a3;
        let LP3 = this.a7 * this.a10 * this.a6;
        let LPT = LP1 + LP2 + LP3;


        let LS1 = this.a3 * this.a11 * this.a7;
        let LS2 = this.a6 * this.a12 * this.a1;
        let LS3 = this.a9 * this.a10 * this.a4;
        let LST = LS1 + LS2 + LS3;

        return (LPT - LST);
    }

    quartoDelta() {
        let LP1 = this.a1 * this.a5 * this.a12;
        let LP2 = this.a4 * this.a8 * this.a10;
        let LP3 = this.a7 * this.a2 * this.a11;
        let LPT = LP1 + LP2 + LP3;


        let LS1 = this.a10 * this.a5 * this.a7;
        let LS2 = this.a11 * this.a8 * this.a1;
        let LS3 = this.a12 * this.a2 * this.a4;
        let LST = LS1 + LS2 + LS3;

        return (LPT - LST);
    }

    realizaContaDelta(d0, d1, d2, d3) {
        const i1 = d1 / d0;
        const i2 = d2 / d0;
        const i3 = d3 / d0;
        console.log(`[i1: ${i1.toFixed(4)}A], [i2: ${i2.toFixed(4)}A], [i3: ${i3.toFixed(4)}A]`);
        //console.log(`i1 - i2 = ${i1 - i2}`);
        //console.log(`[i1: ${Math.floor(i1)}A], [i2: ${Math.floor(i2)}A], [i3: ${Math.floor(i3)}A]`);
    }
}

const Calc1 = new Calculo('2,115,-109,-2,-107,111,1,-1,0', '24,0,4'); 

