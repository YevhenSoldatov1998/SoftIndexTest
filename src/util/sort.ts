import _ from "lodash";

export const sortUtil = (state: any, field:string) => {
    return _.orderBy(state, [field], ['asc']);
}