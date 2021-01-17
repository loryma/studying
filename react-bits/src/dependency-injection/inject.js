var title = 'React Dependency Injection';
export default function inject(Component) {
  return class Injector extends React.Component {
    render () {
      return (
        <Component 
          {...this.state}
          {...this.props}
          title={title}
        />
      )
    }
  }
};