export const IconTitle = (icon: React.JSX.Element, title: string) => {
  return (
    <div className="flex items-center gap-x-8">
      {icon}
      <h4>{title}</h4>
    </div>
  );
};
