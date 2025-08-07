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
      bio: 'A Lorem ipsum dolor',
      bio_1: 'A Lorem ipsum dolor',
      bio_2: 'A Lorem ipsum dolor',
      joinedOn: '2023-01-01',
    },
    {
      id: 2,
      name: 'Jane Doe',
      age: 25,
      status: 'Pending',
      bio: 'A Lorem ipsum dolor',
      bio_1: 'A Lorem ipsum dolor',
      bio_2: 'A Lorem ipsum dolor',
      joinedOn: '2023-02-01',
    },
    {
      id: 3,
      name: 'Steve Doe',
      age: 30,
      status: 'Inactive',
      bio: 'A Lorem ipsum dolor',
      bio_1: 'A Lorem ipsum dolor',
      bio_2: 'A Lorem ipsum dolor',
      joinedOn: '2023-03-01',
    },
    {
      id: 4,
      name: 'Will Smith',
      status: 'Pending',
      age: 40,
      bio: 'A Lorem ipsum dolor',
      bio_1: 'A Lorem ipsum dolor',
      bio_2: 'A Lorem ipsum dolor',
      joinedOn: '2023-04-01',
    },
  ];

  registres = [
    {
      id: 1,
      name: 'John Doe',
      age: 35,
      status: 'Active',
      bio: 'A Lorem ipsum dolor',
      bio_1: 'A Lorem ipsum dolor',
      bio_2: 'A Lorem ipsum dolor',
      joinedOn: '2023-01-01',
    },
    {
      id: 2,
      name: 'Jane Doe',
      age: 25,
      status: 'Pending',
      bio: 'A Lorem ipsum dolor',
      bio_1: 'A Lorem ipsum dolor',
      bio_2: 'A Lorem ipsum dolor',
      joinedOn: '2023-02-01',
    },
    {
      id: 3,
      name: 'Steve Doe',
      age: 30,
      status: 'Inactive',
      bio: 'A Lorem ipsum dolor',
      bio_1: 'A Lorem ipsum dolor',
      bio_2: 'A Lorem ipsum dolor',
      joinedOn: '2023-03-01',
    },
    {
      id: 4,
      name: 'Will Smith',
      status: 'Pending',
      age: 40,
      bio: 'A Lorem ipsum dolor',
      bio_1: 'A Lorem ipsum dolor',
      bio_2: 'A Lorem ipsum dolor',
      joinedOn: '2023-04-01',
    },
  ];
  products = [
    {
      id: 'product-1',
      name: 'Product 1',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, beatae commodi sequi non illum nemo quae! Earum vero nobis magni, numquam velit magnam? Itaque accusantium repellat iusto explicabo? Excepturi facere nemo iure, sed earum unde provident asperiores repellat soluta voluptatum quod labore laboriosam molestiae neque esse ex expedita amet voluptatibus.',

      price: 100,
      category: 'Category A',
      stock: 50,
    },
    {
      id: 'product-2',
      name: 'Product 2',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, beatae commodi sequi non illum nemo quae! Earum vero nobis magni, numquam velit magnam? Itaque accusantium repellat iusto explicabo? Excepturi facere nemo iure, sed earum unde provident asperiores repellat soluta voluptatum quod labore laboriosam molestiae neque esse ex expedita amet voluptatibus.',
      price: 200,
      category: 'Category B',
      stock: 30,
    },
    {
      id: 'product-3',
      name: 'Product 3',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, beatae commodi sequi non illum nemo quae! Earum vero nobis magni, numquam velit magnam? Itaque accusantium repellat iusto explicabo? Excepturi facere nemo iure, sed earum unde provident asperiores repellat soluta voluptatum quod labore laboriosam molestiae neque esse ex expedita amet voluptatibus.',

      price: 150,
      category: 'Category A',
      stock: 20,
    },
    {
      id: 'product-4',
      name: 'Product 4',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, beatae commodi sequi non illum nemo quae! Earum vero nobis magni, numquam velit magnam? Itaque accusantium repellat iusto explicabo? Excepturi facere nemo iure, sed earum unde provident asperiores repellat soluta voluptatum quod labore laboriosam molestiae neque esse ex expedita amet voluptatibus.',

      price: 300,
      category: 'Category C',
      stock: 10,
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
