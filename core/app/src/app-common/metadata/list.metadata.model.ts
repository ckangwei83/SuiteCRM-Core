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

import {ViewFieldDefinition} from '@app-common/metadata/metadata.model';
import {BulkActionsMap} from '@app-common/actions/bulk-action.model';
import {LineAction} from '@app-common/actions/line-action.model';
import {ChartTypesMap} from '@app-common/containers/chart/chart.model';
import {WidgetMetadata} from '@app-common/metadata/widget.metadata';
import {FieldDefinition} from '@app-common/record/field.model';

export interface RecordListMeta {
    fields: ColumnDefinition[];
    bulkActions: BulkActionsMap;
    lineActions: LineAction[];
    filters: Filter[];
}

export interface ListViewMeta extends RecordListMeta {
    chartTypes: ChartTypesMap;
    sidebarWidgets?: WidgetMetadata[];
}

export interface Filter {
    id: string;
    name: string;
    contents: { [key: string]: any };
}

export interface ColumnDefinition extends ViewFieldDefinition {
    width: string;
    default: boolean;
    module: string;
    id: string;
    sortable: boolean;
}

export interface SearchMetaField {
    name?: string;
    type?: string;
    label?: string;
    default?: boolean;
    options?: string;
    fieldDefinition?: FieldDefinition;
}

export interface SearchMetaFieldMap {
    [key: string]: SearchMetaField;
}

export interface SearchMeta {
    layout: {
        basic?: SearchMetaFieldMap;
        advanced?: SearchMetaFieldMap;
    };
}

