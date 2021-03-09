export const reducer = (state, action) => {
    if (action.type === 'fNAME_INCRE') {
        const newPeople = [...state.people];
        newPeople.sort(
            (a, b) => (a.firstName > b.firstName) ? 1 : ((b.firstName > a.firstName) ? -1 : 0)
        )
        return {
            ...state,
            buttonType: true,
            sortBy:'fname',
            people: newPeople
        }
    }
    if (action.type === 'fNAME_DECRE') {
        const newPeople = [...state.people];
        newPeople.sort(
            (a, b) => (a.firstName < b.firstName) ? 1 : ((b.firstName < a.firstName) ? -1 : 0)
        )
        return {
            ...state,
            buttonType: false,
            sortBy:'fname',
            people: newPeople
        }
    }
    if (action.type === 'lNAME_INCRE') {
        const newPeople = [...state.people];
        newPeople.sort(
            (a, b) => (a.lastName > b.lastName) ? 1 : ((b.lastName > a.lastName) ? -1 : 0)
        )
        return {
            ...state,
            buttonType: true,
            sortBy:'lname',
            people: newPeople
        }
    }
    if (action.type === 'lNAME_DECRE') {
        const newPeople = [...state.people];
        newPeople.sort(
            (a, b) => (a.lastName < b.lastName) ? 1 : ((b.lastName < a.lastName) ? -1 : 0)
        )
        return {
            ...state,
            buttonType: false,
            sortBy:'lname',
            people: newPeople
        }
    }
    if (action.type === 'EMAIL_INCRE') {
        const newPeople = [...state.people];
        newPeople.sort(
            (a, b) => (a.email > b.email) ? 1 : ((b.email > a.email) ? -1 : 0)
        )
        return {
            ...state,
            buttonType: true,
            sortBy:'email',
            people: newPeople
        }
    }
    if (action.type === 'EMAIL_DECRE') {
        const newPeople = [...state.people];
        newPeople.sort(
            (a, b) => (a.email < b.email) ? 1 : ((b.email < a.email) ? -1 : 0)
        )
        return {
            ...state,
            buttonType: false,
            sortBy:'email',
            people: newPeople
        }
    }
    if (action.type === 'DATE_INCRE') {
        const newPeople = [...state.people];
        newPeople.sort(
            (a, b) => (a.date > b.date) ? 1 : ((b.date > a.date) ? -1 : 0)
        )
        return {
            ...state,
            buttonType: true,
            sortBy:'fname',
            people: newPeople
        }
    }
    if (action.type === 'DATE_DECRE') {
        const newPeople = [...state.people];
        newPeople.sort(
            (a, b) => (a.date < b.date) ? 1 : ((b.date < a.date) ? -1 : 0)
        )
        return {
            ...state,
            buttonType: false,
            sortBy:'date',
            people: newPeople
        }
    }
    
    return state;
}