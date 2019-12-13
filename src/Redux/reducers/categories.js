const initial_state = {
    work_session: {
        0: {
            id: 0,
            name: "N/A",
            color: "brown"
        },
        1: {
            id: 1,
            name: "Productivity",
            color: "orange"
        },
        2: {
            id: 2,
            name: "Relationships",
            color: "lightskyblue"
        },
        3: {
            id: 3,
            name: "Interests",
            color: "purple"
        },
        4: {
            id: 4,
            name: "Health",
            color: "green"
        },
        5: {
            id: 5,
            name: "Finances",
            color: "red"
        },
        6: {
            id: 6,
            name: "Career / Profession",
            color: "navy"
        },
    }
}

const categories = (state = initial_state, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default categories;