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

import {Injectable} from '@angular/core';
import {ListViewStore} from '@views/list/store/list-view/list-view.store';
import {Metadata} from '@store/metadata/metadata.store.service';
import {FilterConfig} from '@components/list-filter/list-filter.model';
import {SearchCriteria} from '@app-common/views/list/search-criteria.model';
import {SearchMetaFieldMap} from '@app-common/metadata/list.metadata.model';
import {map} from 'rxjs/operators';

@Injectable()
export class FilterAdapter {

    constructor(protected store: ListViewStore) {
    }

    getConfig(): FilterConfig {
        return {

            module: this.store.getModuleName(),
            criteria$: this.store.criteria$,
            searchFields$: this.store.metadata$.pipe(
                map((meta: Metadata) => {

                    if (!meta || !meta.search) {
                        return {} as SearchMetaFieldMap;
                    }

                    const searchMeta = meta.search;

                    let type = 'advanced';
                    if (!searchMeta.layout.advanced) {
                        type = 'basic';
                    }

                    return searchMeta.layout[type];
                })
            ),

            onClose: (): void => {
                this.store.showFilters = false;
            },

            onSearch: (): void => {
                this.store.showFilters = false;
            },

            updateSearchCriteria: (criteria: SearchCriteria, reload = true): void => {
                this.store.updateSearchCriteria(criteria, reload);
            }
        } as FilterConfig;
    }
}
