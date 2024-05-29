const handleScrollToBottomOrTop = () => {
  const isAtBottom =
    window.scrollY >=
    document.documentElement.scrollHeight - window.innerHeight - 1;

  if (isAtBottom) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }
};
export default handleScrollToBottomOrTop;


