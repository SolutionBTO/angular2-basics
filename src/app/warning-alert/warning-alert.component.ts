import { Component } from "@angular/core";

@Component({
    selector: 'app-warning-alert',
    template : `
    <div class="alert alert-warning size-alert" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        <div id="messageWarning">{{textContent}}</div>
    </div>
    `,
    styles: [`
        .size-alert {
            width: 720px;
        }
    `]

})
export class WarningAlertComponent{
    textContent : string = "This is a warning alert—check it out!";
}