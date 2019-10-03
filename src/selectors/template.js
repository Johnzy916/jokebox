const replaceTemplate = (answers, story) => {
    let storyOutput;
    if (answers) {
        answers.forEach((answer, i) => {
            if (i === 0) {
                storyOutput = story.story
                    .replace(story.questions[i].selector, answer);
            } else {
                storyOutput = storyOutput
                    .replace(story.questions[i].selector, answer);
            }
        });
        return storyOutput;
    }
};

export { replaceTemplate as default };