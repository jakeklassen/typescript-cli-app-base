export const run = async (argv: string[]) => {
  const [_bin, _script, ...args] = argv;

  console.log('Thanks for the args:', args);
};
