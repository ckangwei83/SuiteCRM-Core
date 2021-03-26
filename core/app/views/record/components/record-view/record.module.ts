/**
 * SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.
 * Copyright (C) 2021 SalesAgility Ltd.
 *
 * This program is free software; you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License version 3 as published by the
 * Free Software Foundation with the addition of the following permission added
 * to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK
 * IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE
 * WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * In accordance with Section 7(b) of the GNU Affero General Public License
 * version 3, these Appropriate Legal Notices must retain the display of the
 * "Supercharged by SuiteCRM" logo. If the display of the logos is not reasonably
 * feasible for technical reasons, the Appropriate Legal Notices must display
 * the words "Supercharged by SuiteCRM".
 */

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RecordComponent} from './record.component';
import {FieldModule} from '@fields/field.module';
import {RecordContainerModule} from '@views/record/components/record-container/record-container.module';
import {RecordHeaderModule} from '@views/record/components/record-header/record-header.module';
import {StatusBarModule} from '@components/status-bar/status-bar.module';
import {RecordSettingsMenuModule} from '@views/record/components/record-settings-menu/record-settings-menu.module';
import {SubpanelModule} from '@containers/subpanel/components/subpanel/subpanel.module';

@NgModule({
    declarations: [RecordComponent],
    exports: [RecordComponent],
    imports: [
        CommonModule,
        FieldModule,
        RecordContainerModule,
        RecordHeaderModule,
        StatusBarModule,
        RecordSettingsMenuModule,
        SubpanelModule
    ],
})
export class RecordModule {
}
