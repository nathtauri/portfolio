const notes = [14, 9, 17, 12, 15]
const noms = ["Léa", "Hugo", "Inès", "Tom", "Sarah"];
let imax = 0;
for (let i = 1; i < notes.length; i++) {
    if (notes[i] > notes[imax]) {
        imax = i;
    }
}
console.log("La meilleure note est " + notes[imax] + " obtenue par " + noms[imax]);