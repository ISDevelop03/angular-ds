import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.stories.html',
})
export class TableStoryComponent {
  @Input() label: string = 'table';
  @Input() className?: string = '';

  users = [
    {
      id: 1,
      name: 'John Doe',
      age: 35,
      status: 'Active',

      joinedOn: '2023-01-01',
    },
    {
      id: 2,
      name: 'Jane Doe',
      age: 25,
      status: 'Pending',

      joinedOn: '2023-02-01',
    },
    {
      id: 3,
      name: 'Steve Doe',
      age: 30,
      status: 'Inactive',
      joinedOn: '2023-03-01',
    },
    {
      id: 4,
      name: 'Will Smith',
      status: 'Pending',
      age: 40,
      joinedOn: '2023-04-01',
    },
  ];

  onServerSort(event: { accessor: string; direction: 'asc' | 'desc' }) {
    // call your API with event.accessor and event.direction

    console.log('accessor direction', event.accessor, event.direction);
  }

  editUser(id: string) {
    console.log('idididid', id);
  }

  onBulkSelection(event: any) {
    console.log('bulk bulk', event);
  }
}
