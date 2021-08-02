export const ProcessReducer = (state = {}, { type, payload }) => {
    switch (type) {
        //returns updated state
        case "PROCESS":
            return { ...payload };
        //else the current state is retained
        default:
            return state;
    }
};