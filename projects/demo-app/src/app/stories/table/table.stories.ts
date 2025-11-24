import {
  Component,
  Input,
  OnInit,
  ViewChild,
  TemplateRef,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.stories.html',
})
export class TableStoryComponent implements OnInit, AfterViewInit {
  @Input() label: string = 'table';
  @Input() className?: string = '';

  // Dynamic columns that will be generated after backend response
  dynamicColumns: any[] = [];
  finaleColumns: any[] = [];
  isLoadingColumns = true;

  @ViewChild('statusTpl') statusTpl!: TemplateRef<any>;
  @ViewChild('actionTpl') actionTpl!: TemplateRef<any>;

  users = [
    {
      id: 1,
      name: 'John Doe',
      age: 35,
      status: 'Active',
      bio: 'A Lorem ipsum dolor',
      // bio_1: 'A Lorem ipsum dolor',
      // bio_2: 'A Lorem ipsum dolor',
      joinedOn: '2023-01-01',
    },
    {
      id: 2,
      name: 'Jane Doe',
      age: 25,
      status: 'Pending',
      bio: 'A Lorem ipsum dolor',
      // bio_1: 'A Lorem ipsum dolor',
      // bio_2: 'A Lorem ipsum dolor',
      joinedOn: '2023-02-01',
    },
    {
      id: 3,
      name: 'Steve Doe',
      age: 30,
      status: 'Inactive',
      bio: 'A Lorem ipsum dolordmlkj dmk dmlk dmkl',
      // bio_1: 'A Lorem ipsum dolor',
      // bio_2: 'A Lorem ipsum dolor',
      joinedOn: '2023-03-01',
    },
    {
      id: 4,
      name: 'Will Smith',
      status: 'Pending',
      age: 40,
      bio: 'A Lorem ipsum dolor',
      // bio_1: 'A Lorem ipsum dolor',
      // bio_2: 'A Lorem ipsum dolor',
      joinedOn: '2023-04-01',
    },
  ];

  users1 = [
    {
      id: 1,
      name: 'John Doe',
      age: 35,
      status: 'Active',
      bio: 'A Lorem ipsum dolor',
      // bio_1: 'A Lorem ipsum doloropioep ieo iopei poei eopi',
      // bio_2: 'A Lorem ipsum dolor',
      joinedOn: '2023-01-01',
    },
    {
      id: 2,
      name: 'Jane Doe',
      age: 25,
      status: 'Pending',
      bio: 'A Lorem ipsum dolor',
      // bio_1: 'A Lorem ipsum dolor',
      // bio_2: 'A Lorem ipsum dolor',
      joinedOn: '2023-02-01',
    },
    {
      id: 3,
      name: 'Steve Doe',
      age: 30,
      status: 'Inactive',
      bio: 'A Lorem ipsum dolor',
      // bio_1: 'A Lorem ipsum dolor',
      // bio_2: 'A Lorem ipsum dolor',
      joinedOn: '2023-03-01',
    },
    {
      id: 4,
      name: 'Will Smith',
      status: 'Pending',
      age: 40,
      bio: 'A Lorem ipsum dolor',
      // bio_1: 'A Lorem ipsum dolor',
      // bio_2: 'A Lorem ipsum dolor',
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
  products = Array.from({ length: 100 }, (_, i) => {
    const categories = [
      'Category A',
      'Category B',
      'Category C',
      'Category D',
      'Category E',
    ];
    const descriptions = [
      'met consectetur adipisicing elit. Sit, beatae commodi sequi non illum \n nemo quae! Earum vero nobis magni, numquam velit magnam? Itaque accusantium repellat iusto explicabo? \n Excepturi facere nemo iure, sed earum unde provident asperiores repellat soluta voluptatum \n quod labore laboriosam molestiae neque esse.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit\n beatae commodi sequi non illum nemo quae! Earum vero nobis magni, numquam velit magnam? Itaque\n accusantium repellat iusto explicabo? Excepturi facere nemo iure,\n sed earum unde provident asperiores repellat soluta voluptatum quod labore laboriosam molestiaeatibus.',
      'Dolor sit amet consectetur adipisicing elit. Voluptatem\n accusantium repellat iusto explicabo? Excepturi facere nemo iure,\n sed earum unde provident asperiores repellat soluta voluptatum quod labore laboriosam.',
      'Ipsum dolor sit amet consectetur adipisicing elit. Sit beatae\n commodi sequi non illum nemo quae! Earum vero nobis magni, numquam velit magnam?',
      'Consectetur adipisicing elit. Sit, beatae commodi sequi non illum\n nemo quae! Earum vero nobis magni, numquam velit magnam? Itaque accusantium repellat iusto explicabo?',
    ];
    return {
      id: `product-${i + 1}`,
      name: `Product ${i + 1}`,
      description: descriptions[i % descriptions.length],
      price: 6000,
      category: categories[i % categories.length],
      stock: 100,
    };
  });

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

  ngOnInit() {
    console.log('ngOnInit', this.statusTpl);
    this.fetchColumnDefinitions();
  }

  ngAfterViewInit() {
    console.log(this.dynamicColumns);
    // this.finaleColumns = [{header:this.dynamicColumns[0].header,accessor:this.dynamicColumns[0].accessor,cellTemplate: this.statusTpl}]
    console.log('ngAfterViewInit', this.statusTpl);
  }

  fetchColumnDefinitions() {
    this.isLoadingColumns = true;
    setTimeout(() => {
      const backendColumnConfig = [
        {
          field: 'name',
          label: 'Name',
          sortable: true,
          type: 'text',
        },
        {
          field: 'bio',
          label: 'Bio',
          sortable: true,
          type: 'text',
        },
        {
          field: 'age',
          label: 'Age',
          sortable: true,
          type: 'number',
        },
        {
          field: 'status',
          label: 'Status',
          sortable: true,
          type: 'badge',
          template: 'status',
        },
        {
          field: 'id',
          label: 'Actions',
          type: 'action',
          template: 'action',
        },
      ];
      this.dynamicColumns = backendColumnConfig.map((col) => {
        const columnDef: any = {
          header: col.label,
          accessor: col.field,
          sortable: col.sortable || false,
        };
        return columnDef;
      });

      this.isLoadingColumns = false;
      console.log('Columns loaded from backend:', this.dynamicColumns);
    }, 2000);
    console.log('onInit');
  }
}
