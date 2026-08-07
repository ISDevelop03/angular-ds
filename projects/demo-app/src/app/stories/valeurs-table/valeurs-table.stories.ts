import { Component } from '@angular/core';
import {
  ValeursColumn,
  ValeursField,
} from 'projects/design-system/src/lib/components/valeurs-table/valeurs-table.component';

function asColumns(fields: ValeursField[]): ValeursColumn[] {
  const cols: ValeursColumn[] = [];
  for (let i = 0; i < fields.length; i++) {
    cols.push([fields[i]]);
  }
  return cols;
}

function repeat(columns: ValeursColumn[], count: number): ValeursColumn[][] {
  const out: ValeursColumn[][] = [];
  for (let i = 0; i < count; i++) {
    out.push(columns);
  }
  return out;
}

@Component({
  selector: 'app-valeurs-table',
  templateUrl: './valeurs-table.stories.html',
})
export class ValeursTableStoryComponent {
  /** One field per column */
  singleFieldRows: ValeursColumn[][] = repeat(
    asColumns([
      { label: 'Code banque du remettant', value: '022' },
      { label: 'Nom du remettant', value: 'ALLIANZ MAROC' },
      { label: 'N° de compte du client', value: '0079417' },
      { label: 'N° du chèque', value: '01365603' },
      { label: 'Montant', value: '200 000,00 MAD' },
    ]),
    3
  );

  /** Multiple fields stacked per column */
  multiFieldRows: ValeursColumn[][] = repeat(
    [
      [
        { label: 'N° de compte du client remettant', value: '0079417' },
        { label: 'Nom de remettant', value: 'ALLIANZ MAROC' },
      ],
      [
        {
          label: 'N° de compte du client émetteur',
          value: '01145000039210000038472',
        },
        { label: "Nom de l'émetteur", value: 'BMCE MARRAKECH' },
      ],
      [
        { label: 'N° du chèque', value: '01365603' },
        { label: 'Montant', value: '200 000,00 MAD' },
      ],
      [
        { label: 'N° du bordereau de remise', value: '003458' },
        { label: 'Date de réception', value: '19/06/2026' },
      ],
    ],
    2
  );
}
