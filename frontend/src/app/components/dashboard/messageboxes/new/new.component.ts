import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Messagebox } from '../../../../models/messagebox.model'

import { MessageboxService } from '../../../../services/messagebox.service';

@Component({
    selector: 'new-messagebox',
    templateUrl: './new.component.html',
    providers: [MessageboxService],
})

export class NewMessageboxComponent
{
    box = new Messagebox('', 1, '', false, '');
    success:string = '';

    constructor(private messageboxService: MessageboxService)
    {}

    createMessagebox()
    {
        console.log("CREATING");
        this.messageboxService.create(this.box).subscribe(
            error => {
                console.log(error);
            },
            data => {
                this.success = "Messagebox created successfully.";
            }
        )
    }
}