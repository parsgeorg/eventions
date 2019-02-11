export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = options => dispatch => {
	
    const { title, btnText, content } = options;
    return dispatch({
        type: OPEN_MODAL,
        title, btnText, content
    })
}

export function closeModal() {
    return {
        type: CLOSE_MODAL
    };
}

