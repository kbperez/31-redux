import React from 'react';
import {connect} from 'react-redux';
import {categoryCreate} from '../../actions/category-actions';
import CategoryForm from '../category-form/category-form';
import CategoryItem from '../category-item/category-item';


class Dashboard extends React.Component {
  render() {
    return (
      <section>
        <h1>Budget App</h1>

        <CategoryForm
          buttonText='Create'
          onComplete={this.props.dashboardCategoryCreate}/>

        {this.props.categories ?
          this.props.categories.map(cat =>
            <CategoryItem key={cat._id} cat={cat}/>)
          :
          undefined
        }
      </section>
    );
  }
}

const mapStateToProps = state => ({
  categories: state,
});

const mapDispatchToProps = (dispatch, getState) => ({
  dashboardCategoryCreate: category => dispatch(categoryCreate(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
