import React from "react";
import { Button, Card, Col, Form, Input, message, Row, Spin } from "antd";
import { useAuthContext } from "../../context/AuthContext";
import { API } from "../../constant";
import { useState } from "react";
import { getToken } from "../../helpers";

const Profile = () => {
  const [loading, setLoading] = useState(false);
  const { user, isLoading, setUser } = useAuthContext();

  const handleProfileUpdate = async (data) => {
    setLoading(true);
    try {
      const response = await fetch(`${API}/users/${user.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          // set the auth token to the user's jwt
          Authorization: `Bearer ${getToken()}`,
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();

      setUser(responseData);
      message.success("Data saved successfully!");
    } catch (error) {
      console.error(Error);
      message.error("Error While Updating the Profile!");
    } finally {
      setLoading(false);
    }
  };

  if (isLoading) {
    return <Spin size="large" />;
  }

  return (
    <Card className="profile_page_card">
      <Form
        layout="vertical"
        initialValues={{
          username: user?.username,
          email: user?.email,
          twitter_username: user?.twitter_username,
          linkedin_username: user?.linkedin_username,
          github_username: user?.github_username,
          avatar_url: user?.avatar_url,
          website_url: user?.website_url,
          about: user?.about,
        }}
        onFinish={handleProfileUpdate}
      >
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Form.Item
              label="About"
              name="about"
              rules={[
                {
                  required: true,
                  type: "string",
                  max: 120,
                },
              ]}
            >
              <Input.TextArea placeholder="About" rows={6} />
            </Form.Item>
          </Col>

          <Col md={8} lg={8} sm={24} xs={24}>
            <Form.Item
              label="Github Username"
              name="github_username"
              rules={[
                {
                  type: "string",
                },
              ]}
            >
              <Input placeholder="Github Username" />
            </Form.Item>
          </Col>
          <Col md={8} lg={8} sm={24} xs={24}>
            <Form.Item
              label="Website Url"
              name="website_url"
              rules={[
                {
                  type: "url",
                },
              ]}
            >
              <Input placeholder="Website Url" />
            </Form.Item>
          </Col>
          <Col md={8} lg={8} sm={24} xs={24}>
            <Form.Item
              label="Image Url"
              name="avatar_url"
              rules={[
                {
                  type: "url",
                },
              ]}
            >
              <Input placeholder="Image URL" />
            </Form.Item>
          </Col>
        </Row>
        <Button
          className="profile_save_btn text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 "
          htmlType="submit"
          type="primary"
          size="large"
        >
          {loading ? (
            <>
              <Spin size="small" /> Saving
            </>
          ) : (
            "Save"
          )}
        </Button>
      </Form>
    </Card>
  );
};

export default Profile;