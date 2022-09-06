export const handleHover = () => {
    const cursor = document.querySelector('.cursor')
    cursor.classList.add("link-hover")
}

export const handleLeave = () => {
    const cursor = document.querySelector('.cursor')
    cursor.classList.remove("link-hover")
}

export const dragEnter = () => {
    const cursor = document.querySelector('.cursor')
    cursor.classList.add("drag-hover")
}

export const dragLeave = () => {
    const cursor = document.querySelector('.cursor')
    cursor.classList.remove("drag-hover")
}

export const exploreEnter = () => {
    const cursor = document.querySelector('.cursor')
    cursor.classList.add("explore-hover")
}

export const exploreLeave = () => {
    const cursor = document.querySelector('.cursor')
    cursor.classList.remove("explore-hover")
}