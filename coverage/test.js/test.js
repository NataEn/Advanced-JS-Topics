flattenObject = (courses) => {
  return Object.keys(courses).map((key) => {
    let course = {};
    Object.values(courses[key]).forEach((a) => {
      let myImage = a.image
        ? app.getCourseThumbnailUrl(a.image)
        : app.getDefaultCourseImage(a);
      course.name = a.name;
      course.status = key;
      course.image = myImage;
      course.id = a._id;
    });
    console.log("course", course);
    return course;
  });
};
