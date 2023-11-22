import { Component, Inject, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../components/card/card.component';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { OrderInterface } from '../../interfaces/order.interface';

@Component({
  selector: 'app-order-details',
  standalone: true,
  imports: [CommonModule,CardComponent],
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.css'
})

export class OrderDetailsComponent implements OnInit {
  oreder:OrderInterface={};
  http=inject(HttpClient);
  router=inject(ActivatedRoute);
  id="";
    ngOnInit(): void {
    		this.id = this.router.snapshot.paramMap.get("id") ?? "";
    this.http.get<OrderInterface>(`http://localhost:8080/api/orders/${this.id}`)
    .subscribe({
        next:(res)=>{
          this.oreder=res;
          console.log(res);
        },
        error:(err)=>{
          console.log(err);
        }
      })
    }


}
