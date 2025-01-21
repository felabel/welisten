// Roadmap.tsx
import React, { useState } from "react";
import RoadmapCard from "./RoapmapCard";
import Tabs from "./Tabs";
import styles from "./Roadmap.module.scss";
import Header from "../header/Header";

type Card = {
  id: number;
  status: string;
  title: string;
  description: string;
  category: string;
  votes: number;
  comments: number;
};

type RoadmapData = {
  planned: Card[];
  inProgress: Card[];
  live: Card[];
};

const Roadmap: React.FC = () => {
  const [roadmapData, setRoadmapData] = useState<RoadmapData>({
    planned: [
      {
        id: 1,
        status: "Planned",
        title: "More comprehensive reports",
        description:
          "It would be great to see a more detailed breakdown of solutions.",
        category: "Feature",
        votes: 123,
        comments: 2,
      },
      {
        id: 2,
        status: "Planned",
        title: "Learning paths",
        description:
          "Sequenced projects for different goals to help people improve.",
        category: "Feature",
        votes: 28,
        comments: 1,
      },
    ],
    inProgress: [
      {
        id: 3,
        status: "In Progress",
        title: "One-click portfolio generation",
        description:
          "Add ability to create professional looking portfolio from profile.",
        category: "Feature",
        votes: 62,
        comments: 1,
      },
      {
        id: 4,
        status: "In Progress",
        title: "Bookmark challenges",
        description: "Be able to bookmark challenges to take later on.",
        category: "Feature",
        votes: 31,
        comments: 1,
      },
      {
        id: 5,
        status: "In Progress",
        title: "Animated solution screenshots",
        description:
          "Screenshots of solutions with animations don’t display correctly.",
        category: "Bug",
        votes: 9,
        comments: 0,
      },
    ],
    live: [
      {
        id: 6,
        status: "Live",
        title: "Add micro-interactions",
        description: "Small animations at specific points can add delight.",
        category: "Enhancement",
        votes: 71,
        comments: 2,
      },
    ],
  });

  const handleDrag = (
    event: React.DragEvent,
    card: Card,
    oldCategory: keyof RoadmapData
  ) => {
    event.dataTransfer.setData(
      "cardData",
      JSON.stringify({ card, oldCategory })
    );
  };
  const handleDrop = (
    event: React.DragEvent,
    newCategory: keyof RoadmapData
  ) => {
    const { card, oldCategory } = JSON.parse(
      event.dataTransfer.getData("cardData")
    );

    setRoadmapData((prev) => {
      const updatedData = { ...prev };
      // Remove the card from its old category
      // @ts-ignore
      updatedData[oldCategory] = updatedData[oldCategory].filter(
        (item: any) => item.id !== card.id
      );

      // Normalize the status to match statusClasses keys
      const normalizedStatus =
        newCategory === "planned"
          ? "Planned"
          : newCategory === "inProgress"
          ? "In Progress"
          : "Live";

      // Check if the card already exists in the target category
      const alreadyExists = updatedData[newCategory].some(
        (item) => item.id === card.id
      );

      if (!alreadyExists) {
        // Add the card to the new category
        updatedData[newCategory].push({ ...card, status: normalizedStatus });
      }

      return updatedData;
    });
  };

  const renderCards = (category: keyof RoadmapData) => {
    return roadmapData[category].map((card) => (
      <div
        key={card.id}
        draggable
        onDragStart={(e) => handleDrag(e, card, category)}
        onDragOver={(e) => e.preventDefault()}
        className={styles.cardWrapper}
      >
        <RoadmapCard {...card} />
      </div>
    ));
  };
  const renderTabsContent = () => {
    return (
      <Tabs tabs={["Planned", "In Progress", "Live"]}>
        <div className={styles.tabContent}>{renderCards("planned")}</div>
        <div className={styles.tabContent}>{renderCards("inProgress")}</div>
        <div className={styles.tabContent}>{renderCards("live")}</div>
      </Tabs>
    );
  };

  const categoryData = [
    { category: "planned", summary: "Ideas prioritized for research" },
    { category: "inProgress", summary: "Currently being developed" },
    { category: "live", summary: "Released features" },
  ];
  return (
    <>
      <div className={styles.container}>
        <Header
          hasIcon={false}
          title="Roadmap"
          hasBackBtn={true}
          isHome={false}
        />
        <div className={styles.roadmap}>
          {categoryData
            .map((data) => data.category as keyof RoadmapData) // Transform 'categoryData' to 'keyof RoadmapData'
            .filter((category) => category in roadmapData) // Ensure the category exists in 'roadmapData'
            .map((category) => (
              <div
                key={category}
                className={styles.category}
                onDrop={(e) => handleDrop(e, category)}
                onDragOver={(e) => e.preventDefault()}
              >
                <h2 className={styles.categoryTitle}>
                  {category.charAt(0).toUpperCase() + category.slice(1)} (
                  {roadmapData[category].length})
                </h2>
                <p className={styles.summary}>
                  {
                    categoryData.find((data) => data.category === category)
                      ?.summary
                  }
                </p>
                <div className={styles.cardList}>{renderCards(category)}</div>
              </div>
            ))}
        </div>

        <div className={styles.mobileRoadmap}>{renderTabsContent()}</div>
      </div>
    </>
  );
};

export default Roadmap;
