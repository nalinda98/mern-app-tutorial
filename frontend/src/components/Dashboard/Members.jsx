import { SearchOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal, Space, Table, Tag, Select, message } from "antd";
import React, { useEffect, useState } from "react";
import { ApiClient } from "../../utils/ApiClient";

const Members = () => {
  const [isloading, setIsLoading] = useState(false);
  const [responseData, setResponseData] = useState([]);


  useEffect(() => {
    fetchData();
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      filterSearch: true,
      sorter: (a, b) => a.name.localeCompare(b.name),
      onFilter: (value, record) =>
        record.name.toLowerCase().includes(value.toLowerCase()),
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder={`Search Name`}
            value={selectedKeys[0]}
            onChange={(e) =>
              setSelectedKeys(e.target.value ? [e.target.value] : [])
            }
            onPressEnter={confirm}
            style={{ width: 188, marginBottom: 8, display: "block" }}
          />
          <Space>
            <Button
              type="primary"
              onClick={confirm}
              icon={<SearchOutlined />}
              size="small"
              style={{ width: 90 }}
            >
              Search
            </Button>
            <Button onClick={clearFilters} size="small" style={{ width: 90 }}>
              Reset
            </Button>
          </Space>
        </div>
      ),
      filterIcon: (filtered) => (
        <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
      ),
    },
    {
      title: "E mail",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      filters: [
        { text: "User", value: "user" },
        { text: "Admin", value: "admin" },
        { text: "Super Admin", value: "super-admin" },
        { text: "Staff", value: "staff" },
      ],
      onFilter: (value, record) => record.role.includes(value),
      render: (role) => (
        <Tag color={role === "admin" ? "blue" : role === "user" ? "green" : role === "super-admin" ? "red" : "orange"}>
          {role}
        </Tag>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Select
            defaultValue={record.role}
            style={{ width: 120 }}
            onChange={(newRole) => handleRoleChange(newRole, record)}
          >
            <Select.Option value="user">User</Select.Option>
            <Select.Option value="admin">Admin</Select.Option>
            <Select.Option value="super-admin">Super Admin</Select.Option>
            <Select.Option value="staff">Staff</Select.Option>
          </Select>
        </Space>
      ),
    },
  ];
  

  const fetchData = async () => {
    setIsLoading(true);
    await ApiClient.get("/user/getUsersDetails")
      .then((response) => {
        setIsLoading(false);
        setResponseData(response.data);
      })
      .catch((error) => {
        setIsLoading(false);
         message.error("Failed to fetch data");
      });
  };


  const handleRoleChange = (newRole, record) => {
    // Check if the new role is valid before updating
    const validRoles = ["user", "admin", "super-admin", "staff"];
    
    if (validRoles.includes(newRole)) {
      // Show confirmation modal
      Modal.confirm({
        title: 'Are you sure you want to change the role?',
        content: `You are about to change the role of ${record.name} to ${newRole}.`,
        okText: 'Yes',
        cancelText: 'No',
        onOk: () => {
          setIsLoading(true);
          ApiClient.put("/user/updateMemberDetails", {
            id: record._id,
            role: newRole,
          })
            .then(() => {
              setIsLoading(false);
               message.success("Role updated successfully");
              fetchData();
            })
            .catch(() => {
              setIsLoading(false);
               message.error("Failed to update role");
            });
        },
        onCancel: () => {
          message.info("Role change canceled");
        },
      });
    } else {
      message.error("Invalid role");
    }
  };
  
  return (
    <div className="container">
      <Table columns={columns} dataSource={responseData} loading={isloading} />
    
      
    </div>
  );
};

export default Members;
