function clearConsole() {
  process.stdout.cursorTo(0, 0);
  process.stdout.clearScreenDown();
}

export default clearConsole;
