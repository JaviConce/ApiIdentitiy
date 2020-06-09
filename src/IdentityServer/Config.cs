// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.


using IdentityServer4.Models;
using IdentityServer4.Test;
using System.Collections.Generic;
using System.Security.Claims;

namespace IdentityServer
{
    public static class Config
    {
        public static List<TestUser> GetUsers()
        {
            return new List<TestUser>
                {
                    new TestUser
                    {
                        SubjectId = "1",
                        Username = "operador1",
                        Password = "123"
                    },
                    new TestUser
                    {
                        SubjectId = "2",
                        Username = "OSX",
                        Password = "OSXPassword"
                    }
                };
        }

        public static IEnumerable<ApiResource> Apis =>
        new List<ApiResource>
        {
            new ApiResource("api1", "My API")
        };

        public static IEnumerable<Client> Clients => new List<Client>
        {
            new Client
            {
                AllowAccessTokensViaBrowser = true,
                ClientId = "api1",
                AllowedGrantTypes = GrantTypes.ResourceOwnerPassword,
                ClientSecrets = { new Secret("secret".Sha256()) },
                AllowedScopes = { "api1" }
            }
        };
    }
}