import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface Filial {
  icon: string;
  id: number;
  sector: string;
  name: string;
}

@Component({
  selector: 'app-filials',
  templateUrl: './filials.component.html',
})
export class FilialsComponent {
  constructor(@Inject(Router) private router: Router) {}

  currentFilial: Filial | null = null;

  holding = {
    title: 'Vision holding - Groupe OCP',
    href: 'https://www.ocpgroup.ma/',
  };

  filials: Filial[] = [
    {
      icon: 'https://placehold.co/150x150/png?text=OCP',
      id: 1,
      sector: 'Agriculture',
      name: 'OCP',
    },
    {
      icon: 'https://placehold.co/150x150/png?text=AgroCorp',
      id: 2,
      sector: 'Agriculture',
      name: 'AgroCorp',
    },
    {
      icon: 'https://placehold.co/150x150/png?text=GreenFields',
      id: 3,
      sector: 'Agriculture',
      name: 'GreenFields',
    },
    {
      icon: 'https://placehold.co/150x150/png?text=FarmPlus',
      id: 4,
      sector: 'Agriculture',
      name: 'FarmPlus',
    },
    {
      icon: 'https://placehold.co/150x150/png?text=HarvestCo',
      id: 5,
      sector: 'Agriculture',
      name: 'HarvestCo',
    },
    {
      icon: 'https://placehold.co/150x150/png?text=BioAgri',
      id: 6,
      sector: 'Agriculture',
      name: 'BioAgri',
    },
    {
      icon: 'https://placehold.co/150x150/png?text=AgroTech',
      id: 7,
      sector: 'Agriculture',
      name: 'AgroTech',
    },
    {
      icon: 'https://placehold.co/150x150/png?text=VegiFarm',
      id: 8,
      sector: 'Agriculture',
      name: 'VegiFarm',
    },
    {
      icon: 'https://placehold.co/150x150/png?text=TerraHarvest',
      id: 9,
      sector: 'Agriculture',
      name: 'TerraHarvest',
    },
    {
      icon: 'https://placehold.co/150x150/png?text=CropMasters',
      id: 10,
      sector: 'Agriculture',
      name: 'CropMasters',
    },
    {
      icon: 'https://placehold.co/150x150/png?text=FarmFusion',
      id: 11,
      sector: 'Agriculture',
      name: 'FarmFusion',
    },
    {
      icon: 'https://placehold.co/150x150/png?text=EarthYield',
      id: 12,
      sector: 'Agriculture',
      name: 'EarthYield',
    },
    {
      icon: 'https://placehold.co/150x150/png?text=SoilSolutions',
      id: 13,
      sector: 'Agriculture',
      name: 'SoilSolutions',
    },
    {
      icon: 'https://placehold.co/150x150/png?text=GreenLeaf',
      id: 14,
      sector: 'Agriculture',
      name: 'GreenLeaf',
    },
    {
      icon: 'https://placehold.co/150x150/png?text=AgroGlobal',
      id: 15,
      sector: 'Agriculture',
      name: 'AgroGlobal',
    },
    {
      icon: 'https://placehold.co/150x150/png?text=HarvestWorks',
      id: 16,
      sector: 'Agriculture',
      name: 'HarvestWorks',
    },
    {
      icon: 'https://placehold.co/150x150/png?text=FieldForce',
      id: 17,
      sector: 'Agriculture',
      name: 'FieldForce',
    },
    {
      icon: 'https://placehold.co/150x150/png?text=AgroVision',
      id: 18,
      sector: 'Agriculture',
      name: 'AgroVision',
    },
  ];

  // pagination state
  totalItems = 0;
  currentPage = 1;
  itemsPerPage = 8;

  // the slice of `filials` to actually render
  paginatedFilials: Filial[] = [];

  ngOnInit() {
    this.totalItems = this.filials.length;
    this.updatePaginatedFilials();
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.updatePaginatedFilials();
  }

  onPerPageChange(perPage: number) {
    this.itemsPerPage = perPage;
    this.currentPage = 1; // reset back to first page
    this.updatePaginatedFilials();
  }

  private updatePaginatedFilials() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.paginatedFilials = this.filials.slice(start, end);
  }

  onFilialClick(filial: any) {
    this.currentFilial = filial;
    console.log('Filial clicked:', filial);
    this.router.navigate(['/dashboard'], {
      queryParams: {
        filial: filial.id,
      },
    });
    // Here you can handle the click event, e.g., navigate to a detail page or show more information
  }
}
