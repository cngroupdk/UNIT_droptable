import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Messagebox } from '../../../models/messagebox.model'
import { Response } from '../../../models/response.model'

import { MessageboxService } from '../../../services/messagebox.service';
import { ResponseService } from '../../../services/response.service';

@Component({
    selector: 'dashboard',
    templateUrl: './messagebox.component.html',
    providers: [ResponseService, MessageboxService],
})

export class DashboardMessageboxComponent implements OnInit
{
    responses:Response[];
    messagebox:Messagebox;

    constructor(private responseService: ResponseService, private messageboxService: MessageboxService, private route: ActivatedRoute)
    {
    }

    ngOnInit()
    {
       this.messageboxService.get(this.route.snapshot.params['id']).subscribe(
            data => {
                this.messagebox = data.json()
            },
            error => {
                console.log(error)
            }
        )
        this.responseService.get(this.route.snapshot.params['id']).subscribe(
            data => {
                this.responses = data.json();
            },
            error => {
                console.log(error);
            }
        )
    }
}