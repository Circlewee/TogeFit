import getPath from 'common/utils/getPath';
import CustomCard from 'common/components/custom-card/CustomCard';
import Modal from 'common/components/alert-modal';
import { useNavigate } from 'react-router-dom';
import * as SC from './ArticleContainerStyle';
import MealDummyItem from './MealDummyItem';
import useArticle from '../hook/useArticle';

const ArticleContainer = () => {
  const path = getPath();
  const navigate = useNavigate();
  const { isLoading, articleList, errorMessage, isOpen, setIsOpen } =
    useArticle();

  const handleClick = () => {
    setIsOpen(false);
    navigate('/');
  };

  return (
    <>
      {isLoading && <div>loading...</div>}
      <SC.ContainerSection>
        {articleList.map(
          (article) =>
            path === 'exercise' && (
              <CustomCard
                key={`custom-card-${Math.random()}`}
                imgUrl={article.post_image[0]}
                content={article.contents}
                tagList={article.tag_list}
              />
            )
        )}
        {/* TODO: 식사 게시글 처리 */}
        {Array(8)
          .fill(0)
          .map(
            () =>
              path === 'meal' && (
                <MealDummyItem key={`dummy-item-${Math.random()}`} />
              )
          )}
        {isOpen && <Modal message={errorMessage} handleConfirm={handleClick} />}
      </SC.ContainerSection>
    </>
  );
};

export default ArticleContainer;
