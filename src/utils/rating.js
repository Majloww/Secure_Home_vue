export function handleStarClick(stars, setRating) {
    stars.forEach((star, index1) => {
        star.addEventListener("click", () => {
            setRating(index1 + 1);
            stars.forEach((star, index2) => {
                index1 >= index2
                    ? star.classList.add("active")
                    : star.classList.remove("active");
            });
        });
    });
}
