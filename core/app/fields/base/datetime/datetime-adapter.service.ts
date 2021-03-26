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

import {NgbDateAdapter} from '@ng-bootstrap/ng-bootstrap';
import {Injectable} from '@angular/core';
import {DatetimeFormatter, DateTimeStruct} from '@services/formatters/datetime/datetime-formatter.service';
import {padObjectValues} from '@app-common/utils/object-utils';


@Injectable()
export class DatetimeAdapter extends NgbDateAdapter<string> {

    readonly DELIMITER = '-';

    constructor(
        protected formatter: DatetimeFormatter
    ) {
        super();
    }

    fromModel(value: string | null): DateTimeStruct | null {
        if (!value) {
            return null;
        }

        return this.formatter.userDateTimeFormatToStruct(value);
    }

    toModel(date: DateTimeStruct | null): string | null {
        if (!date) {
            return null;
        }
        date = padObjectValues(date);
        const dateString = [date.month, date.day, date.year].join(this.DELIMITER);
        const timeString = ['00', '00'].join('.');
        const dateTimeString = dateString + ' ' + timeString;
        return this.formatter.toUserFormat(dateTimeString);
    }
}
