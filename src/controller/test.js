const getAllTests = async (req, res) => {
  return res.json({
    success: true,
    tests: [
      {
        id: 45252,
        name: 'Test'
      }
    ]
  });
};

const getTest = async (req, res) => {
  return res.json({
    success: true,
    test: {
      id: 45252,
      name: 'Test'
    }
  });
};

export default {
  getTest,
  getAllTests
};
